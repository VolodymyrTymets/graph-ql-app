const signUp = async (parent, args, { auth }) => {
  try {
    const { password, email } = args;

    const { _id } = await auth.signUp(email, password);
    const token = auth.generateAccessToken({ _id });

    return token;
  } catch (e) {
    throw e;
  }
};

module.exports = { signUp };