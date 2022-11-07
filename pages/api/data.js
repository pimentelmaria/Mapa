// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "usa": {
      "population": 500000,
      "size": 300000,
      "language": 'english'
    },
    "brasil": {
      "population": 2700000,
      "size": 32030000,
      "language": 'portuguese'
    }
  })
}
