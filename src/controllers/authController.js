export const login = (req, res) => {
  console.log({ requestFromOutside: req.body });
  res.status(200).json({
    success: true,
    message: "Login berhasil",
  });
};

export const updateLogin = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    success: true,
    message: "Update berhasil",
  });
};
