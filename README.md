# A place to test Nodejs and more as a beginner with the magic of VSCode

## DEBUG Setting for VSCode

Use the same setting, change the filename of the program only...

```javascript
{
            "type": "node",
            "request": "launch",
            "name": "First one",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\first.js"
        }
```

## first.js

[The JS file](first.js) was testing the [simple-icons library](https://github.com/simple-icons/simple-icons) to see how the output look like. It became the [Socmed Button Component](https://github.com/headsink/firstAstroSite/blob/master/src/components/SocmedButton.astro) in my [firstAstroSite Repo](https://github.com/headsink/firstAstroSite).

## Date Time test

The [datetimetest JS file](datetimetest.js) was for testing date time library because parsing date time format was not easy. Decision to choose which library to use was refered from [You don't (may not) need Moment.js](https://github.com/you-dont-need/You-Dont-Need-Momentjs#string--date-format) Repo.

What am I trying to parse/convert?

```
Mon Jul 16 01:28:17 +0000 2012

ccc MMM dd HH:mm:ss xxxx yyyy // format in date-fns library
```

### Should trry day.js

[Dayjs](https://github.com/iamkun/dayjs) seems simple enough.
