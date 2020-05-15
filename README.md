# STRING REVERSER AWS LAMBDA FUNCTION
This is a hello world with steroids of `AWS lambda functions`. This simple handler respondes to an
API Gateway call and returns the original string and the reversed one.

# Testing
> endpoint: https://zepsiy5104.execute-api.us-east-1.amazonaws.com/default/stringReverser

To test it just hit [the endpoint](https://zepsiy5104.execute-api.us-east-1.amazonaws.com/default/stringReverser)
with `insomnia`, `postman` or any other software alike. Just send a `POST` request with this `json` body:
```json5
{
    "string": "example"
}
```
And you shall get a response like this:
```json5
{
    "original": "example",
    "reversed": "elpmaxe"
}
```
