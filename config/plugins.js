module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID_STRAPI"),
        secretAccessKey: env("AWS_SECRET_ACCESS_KEY_STRAPI"),
        region: "us-east-1",
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
    },
  },
});
