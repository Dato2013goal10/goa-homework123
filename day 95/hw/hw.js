const userRole = "admin"
const roleMessage = <p>{userRole === "admin" ? "Admin Panel" : "User Dashboard"}</p>

const isAvailable = true
const price = 100
const product = <p>{isAvailable ? price : "Out of stock"}</p>

const isDaytime = true
const image = <img src={isDaytime ? "sun.png" : "moon.png"} />

const hasNotification = true
const notification = hasNotification && <p>New Notification</p>

const email = "user@gmail.com"
const userEmail = email && <p>{email}</p>

const discount = 10
const discountText = discount > 0 && <p>Discount Available!</p>