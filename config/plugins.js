module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY"),
        secretAccessKey: env("AWS_SECRET_KEY"),
        region: "us-east-1",
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
    },
  },
});
