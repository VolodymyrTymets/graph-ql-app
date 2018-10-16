const signIn = async (parent, args, { auth }) => {
  try {
    const { email, password } = args;
    const { _id } = await auth.signIn(email, password);
    const token = auth.generateAccessToken({ _id });
    return token;
  } catch (e) {
    throw e;
  }
};

module.exports = { signIn };