export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req, res) {
  const { default: siteMetadata } = await import('@/data/siteMetadata')
  const githubUrl = siteMetadata.github || 'https://github.com'
  const username = githubUrl.replace('https://github.com/', '').replace('/', '')

  const userResponse = await fetch(`https://api.github.com/users/${username}`)
  const userReposResponse = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100`
  )

  const user = await userResponse.json()
  const repositories = await userReposResponse.json()
  const mine = repositories.filter((repo) => !repo.fork)
  const stars = mine.reduce((accumulator, repository) => {
    return accumulator + repository['stargazers_count']
  }, 0)

  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')

  return res.status(200).json({
    followers: user.followers,
    stars,
    repos: user.public_repos,
    gists: user.public_gists,
  })
}
