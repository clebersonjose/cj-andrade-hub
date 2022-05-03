(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    './.storybook/preview.js-generated-config-entry.js': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          'parameters',
          function () {
            return parameters;
          }
        ),
        __webpack_require__.d(
          preview_namespaceObject,
          'decorators',
          function () {
            return decorators;
          }
        );
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.filter.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptor.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.for-each.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.for-each.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptors.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-properties.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-property.js'
        );
      var ClientApi = __webpack_require__(
          './node_modules/@storybook/client-api/dist/esm/ClientApi.js'
        ),
        esm = __webpack_require__(
          './node_modules/@storybook/client-logger/dist/esm/index.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        parameters = {
          actions: { argTypesRegex: '^on[A-Z].*' },
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/ }
          }
        },
        decorators = [
          function (Story) {
            return Object(jsx_runtime.jsx)('html', {
              style: { fontSize: '10px' },
              children: Object(jsx_runtime.jsx)(Story, {})
            });
          }
        ];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
          case 'argTypes':
            return esm.a.warn(
              'Invalid args/argTypes in config, ignoring.',
              JSON.stringify(value)
            );
          case 'decorators':
            return value.forEach(function (decorator) {
              return Object(ClientApi.d)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return Object(ClientApi.e)(loader, !1);
            });
          case 'parameters':
            return Object(ClientApi.f)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.b)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.c)(enhancer);
            });
          case 'render':
            return Object(ClientApi.g)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), Object(ClientApi.f)(v, !1);
          case '__namedExportsOrder':
          case 'decorateStory':
          case 'renderToDOM':
            return null;
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    './generated-stories-entry.js': function (
      module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      (function (module) {
        (0,
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/index.js'
        ).configure)(
          [
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$'
            ),
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$'
            )
          ],
          module,
          !1
        );
      }.call(
        this,
        __webpack_require__('./node_modules/webpack/buildin/module.js')(module)
      ));
    },
    './node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/stories/button.css':
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          './node_modules/css-loader/dist/runtime/api.js'
        )(!1)).push([
          module.i,
          ".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",
          ''
        ]),
          (module.exports = exports);
      },
    './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$':
      function (module, exports, __webpack_require__) {
        var map = {
          './components/Title/Title.stories.tsx':
            './src/components/Title/Title.stories.tsx',
          './stories/Button.stories.tsx': './src/stories/Button.stories.tsx'
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$');
      },
    './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$':
      function (module, exports) {
        function webpackEmptyContext(req) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        (webpackEmptyContext.keys = function () {
          return [];
        }),
          (webpackEmptyContext.resolve = webpackEmptyContext),
          (module.exports = webpackEmptyContext),
          (webpackEmptyContext.id =
            './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$');
      },
    './src/components/Title/Title.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary;
        });
      var _templateObject;
      __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js');
      var Title = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ).a.h1(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteralLoose(
              strings,
              raw
            ) {
              return (
                raw || (raw = strings.slice(0)), (strings.raw = raw), strings
              );
            })([
              "\n  font-size: 4.8rem;\n  line-height: 1.25em;\n  color: #000;\n  font-family: 'Quicksand', sans-serif;\n\n  @media (max-width: 780px) {\n    font-size: 4rem;\n  }\n\n  @media (max-width: 480px) {\n    font-size: 3.6rem;\n  }\n"
            ]))
        ),
        components_Title = Title;
      try {
        (Title.displayName = 'Title'),
          (Title.__docgenInfo = {
            description: '',
            displayName: 'Title',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null'
                }
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'any' }
              },
              as: {
                defaultValue: null,
                description: '',
                name: 'as',
                required: !1,
                type: { name: 'undefined' }
              },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' }
              }
            }
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Title/index.tsx#Title'] = {
              docgenInfo: Title.__docgenInfo,
              name: 'Title',
              path: 'src/components/Title/index.tsx#Title'
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        Title_stories_Template =
          ((__webpack_exports__.default = {
            title: 'Components/Title',
            component: components_Title
          }),
          function Template(_ref) {
            var text = _ref.text;
            return Object(jsx_runtime.jsx)(components_Title, {
              children: text
            });
          });
      Title_stories_Template.displayName = 'Template';
      var Primary = Title_stories_Template.bind({});
      (Primary.args = { text: 'Title' }),
        (Primary.parameters = Object.assign(
          {
            storySource: {
              source:
                '({ text }: { text: string }) => (\n  <Title>{text}</Title>\n)'
            }
          },
          Primary.parameters
        ));
    },
    './src/stories/Button.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary;
        }),
        __webpack_require__.d(__webpack_exports__, 'Secondary', function () {
          return Secondary;
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large;
        }),
        __webpack_require__.d(__webpack_exports__, 'Small', function () {
          return Small;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__('./node_modules/react/index.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.join.js'),
        __webpack_require__('./src/stories/button.css');
      var jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['primary', 'size', 'backgroundColor', 'label'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Button_Button = function Button(_ref) {
        var _ref$primary = _ref.primary,
          primary = void 0 !== _ref$primary && _ref$primary,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? 'medium' : _ref$size,
          backgroundColor = _ref.backgroundColor,
          label = _ref.label,
          props = _objectWithoutProperties(_ref, _excluded),
          mode = primary
            ? 'storybook-button--primary'
            : 'storybook-button--secondary';
        return Object(jsx_runtime.jsx)(
          'button',
          Object.assign(
            {
              type: 'button',
              className: [
                'storybook-button',
                'storybook-button--' + size,
                mode
              ].join(' '),
              style: { backgroundColor: backgroundColor }
            },
            props,
            { children: label }
          )
        );
      };
      Button_Button.displayName = 'Button';
      try {
        (Button_Button.displayName = 'Button'),
          (Button_Button.__docgenInfo = {
            description: 'Primary UI component for user interaction',
            displayName: 'Button',
            props: {
              primary: {
                defaultValue: { value: 'false' },
                description:
                  'Is this the principal call to action on the page?',
                name: 'primary',
                required: !1,
                type: { name: 'boolean' }
              },
              backgroundColor: {
                defaultValue: null,
                description: 'What background color to use',
                name: 'backgroundColor',
                required: !1,
                type: { name: 'string' }
              },
              size: {
                defaultValue: { value: 'medium' },
                description: 'How large should the button be?',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"small"' },
                    { value: '"medium"' },
                    { value: '"large"' }
                  ]
                }
              },
              label: {
                defaultValue: null,
                description: 'Button contents',
                name: 'label',
                required: !0,
                type: { name: 'string' }
              },
              onClick: {
                defaultValue: null,
                description: 'Optional click handler',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' }
              }
            }
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Button.tsx#Button'] = {
              docgenInfo: Button_Button.__docgenInfo,
              name: 'Button',
              path: 'src/stories/Button.tsx#Button'
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = {
        title: 'Example/Button',
        component: Button_Button,
        argTypes: { backgroundColor: { control: 'color' } }
      };
      var Button_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)(Button_Button, Object.assign({}, args));
      };
      Button_stories_Template.displayName = 'Template';
      var Primary = Button_stories_Template.bind({});
      Primary.args = { primary: !0, label: 'Button' };
      var Secondary = Button_stories_Template.bind({});
      Secondary.args = { label: 'Button' };
      var Large = Button_stories_Template.bind({});
      Large.args = { size: 'large', label: 'Button' };
      var Small = Button_stories_Template.bind({});
      (Small.args = { size: 'small', label: 'Button' }),
        (Primary.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Primary.parameters
        )),
        (Secondary.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Secondary.parameters
        )),
        (Large.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Large.parameters
        )),
        (Small.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Small.parameters
        ));
    },
    './src/stories/button.css': function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        content = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/stories/button.css'
        );
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    './storybook-init-framework-entry.js': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(
        './node_modules/@storybook/react/dist/esm/client/index.js'
      );
    },
    0: function (module, exports, __webpack_require__) {
      __webpack_require__(
        './node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'
      ),
        __webpack_require__(
          './node_modules/@storybook/core-client/dist/esm/globals/globals.js'
        ),
        __webpack_require__('./storybook-init-framework-entry.js'),
        __webpack_require__(
          './node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './.storybook/preview.js-generated-config-entry.js'
        ),
        (module.exports = __webpack_require__('./generated-stories-entry.js'));
    },
    1: function (module, exports) {}
  },
  [[0, 5, 6]]
]);
