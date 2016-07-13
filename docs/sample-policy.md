
## Travis CI Deployment Policy
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "apigateway:*"
            ],
            "Resource": [
              "arn:aws:apigateway:__REGION__::/restapis/__API_ID__"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "lambda:*"
            ],
            "Resource": [
                "arn:aws:lambda:__REGION__:__ACCOUNT_ID__:function:__FUNCTION_NAME__"
            ]
        }
    ]
}
```
