import expresss from 'express'
import { router } from "./routes/index"


const app = expresss()
app.use(expresss.json())

const PORT = process.env.PORT || 3000

app.use("/api", router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})



