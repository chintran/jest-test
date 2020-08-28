## Build steps

This repository to build jest test environment
(Require docker ready to installed on your environment)

1. Build image
    - cd to souce code
    - Run: docker build -t jest-img .
2. Make container
    - Run: docker run -itd --name jest-test -v \$(pwd)/:/app/source/ jest-img
3. Run test example
    - loggin to container and cd /app
    - yarn install
    - yarn test
