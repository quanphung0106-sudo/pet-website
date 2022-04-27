export default async function activateUser(req, res) {
  const email = req.query.email;
  if (!email) {
    return res.status(401).json({ message: "Cannot Validate an User!" });
  }

  const response = await fetch(
    `http://localhost:8800/api/auth/active-account/${email}`
  );
  if (response.status >= 400) {
    return res.status(401).json({ message: "Cannot Validate an User!" });
  } else {
    res.writeHead(307, { Location: "/activated.js" });
    res.end();
  }
}
