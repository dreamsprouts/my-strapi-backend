module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', 'jdgYSp6B4Z+jmP9icFLADQ=='),
      },
    },
  });
  