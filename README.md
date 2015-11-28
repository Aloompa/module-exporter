## Welcome to module-exporter

Exporting modules for AMD, CommonJS and globally.

## Installation

`npm install module-exporter`

## API

Just pass your module entry point through the `moduleExporter` function and export it:

```
const myCode = require('myCode');
const moduleExporter = require('module-exporter');

module.exports = moduleExporter('myCodeName', myCode);
```

This will make the module available through popular JavaScript module systems and globally for the old-timers out there. The global module name will be on the `window` object with the name that you pass in to `moduleExporter()` as the first argument.

## Contributing

We encourage you to contribute to module-exporter by submitting bug reports and pull requests through [Github](http://github.com).

## License

module-exporter is released under The [MIT License](http://www.opensource.org/licenses/MIT) (MIT)

Copyright (c) [2015] [Aloompa LLC]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
