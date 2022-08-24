const Minio = require('minio');
const { endPoint, accessKey, secretKey } = process.env;
var minioClient = new Minio.Client({
    endPoint,
    port: 443,
    useSSL: true,
    accessKey,
    secretKey,
});
const file = './public/version.json';
var metaData = {
    'Content-Type': 'application/octet-stream',
    'X-Amz-Meta-Testing': 1234,
    'example': 5678
}
// Using fPutObject API upload your file to the bucket europetrip.
minioClient.fPutObject('app', 'version.json', file, metaData, function(err, etag) {
  if (err) return console.log(err)
  console.log('文件上传成功.')
});