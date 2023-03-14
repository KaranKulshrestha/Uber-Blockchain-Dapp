import { client } from "@/lib/client"

const query = `
*[_type=="rides"]{
  "service": title,
  "iconUrl": icon.asset->url,
  priceMultiplier,
  orderById
}|order(orderById asc)
`

const getRideTypes = async (req, res) => {
  try {
    const posts = await client.fetch(query)
    res.status(200).send({ message: 'success', data: posts })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getRideTypes