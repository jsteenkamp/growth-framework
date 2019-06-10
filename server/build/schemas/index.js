"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _discipline = _interopRequireDefault(require("./discipline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const link = _apolloServerExpress.gql`
    type Query {
        _: Boolean
    }
    type Mutation {
        _: Boolean
    }
    # used for method and scan until we decompose file objects
    scalar JSON
`;
var _default = [link, _discipline.default];
exports.default = _default;