module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0adb679e7aff39b0011b17733293f2d1'),
  },
});
