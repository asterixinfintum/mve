"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _authenticateToken = _interopRequireDefault(require("../../utils/authenticateToken"));
var _itemeditor = _interopRequireDefault(require("../utils/itemeditor"));
var _loan = _interopRequireDefault(require("../../models/loan"));
var _investmentplan = _interopRequireDefault(require("../../models/investmentplan"));
var _savingsplan = _interopRequireDefault(require("../../models/savingsplan"));
var _notification = _interopRequireDefault(require("../../models/notification"));
var _message = _interopRequireDefault(require("../../models/message"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var item = (0, _express["default"])();
item.post('/item/createloan', _authenticateToken["default"], function (req, res) {
  if (req.user && req.user._id) {
    _loan["default"].createloanitem(req.body).then(function (success) {
      res.status(200).send({
        success: success
      });
    })["catch"](function (error) {
      res.status(405).send({
        error: error
      });
    });
    return;
  }
  res.status(405).send({
    error: 'not alowed'
  });
});
item.get('/item/loans', _authenticateToken["default"], function (req, res) {
  if (req.user && req.user._id) {
    _loan["default"].getloans().then(function (success) {
      res.status(200).send({
        success: success
      });
    })["catch"](function (error) {
      res.status(405).send({
        error: error
      });
    });
    return;
  }
  res.status(405).send({
    error: 'not alowed'
  });
});
item.get('/item/investments', _authenticateToken["default"], function (req, res) {
  if (req.user && req.user._id) {
    _investmentplan["default"].getinvestmentplans().then(function (success) {
      res.status(200).send({
        success: success
      });
    })["catch"](function (error) {
      res.status(405).send({
        error: error
      });
    });
    return;
  }
  res.status(405).send({
    error: 'not alowed'
  });
});
item.post('/item/createinvestmentplan', _authenticateToken["default"], function (req, res) {
  if (req.user && req.user._id) {
    _investmentplan["default"].createinvestmentplan(req.body).then(function (success) {
      res.status(200).send({
        success: success
      });
    })["catch"](function (error) {
      console.log(error);
      res.status(405).send({
        error: error
      });
    });
    return;
  }
  res.status(405).send({
    error: 'not alowed'
  });
});
item.post('/item/createsavingsplanitem', _authenticateToken["default"], function (req, res) {
  if (req.user && req.user._id) {
    _savingsplan["default"].createsavingsitem(req.body).then(function (success) {
      res.status(200).send({
        success: success
      });
    })["catch"](function (error) {
      res.status(405).send({
        error: error
      });
    });
    return;
  }
  res.status(405).send({
    error: 'not alowed'
  });
});
item.get('/item/savingsplans', _authenticateToken["default"], function (req, res) {
  if (req.user && req.user._id) {
    _savingsplan["default"].getsavingsitems().then(function (success) {
      res.status(200).send({
        success: success
      });
    })["catch"](function (error) {
      res.status(405).send({
        error: error
      });
    });
    return;
  }
  res.status(405).send({
    error: 'not alowed'
  });
});
item.post('/item/createnotification', _authenticateToken["default"], function (req, res) {
  if (req.user && req.user._id) {
    _notification["default"].createnotification(req.body).then(function (success) {
      res.status(200).send({
        success: success
      });
    })["catch"](function (error) {
      res.status(405).send({
        error: error
      });
    });
    return;
  }
  res.status(405).send({
    error: 'not alowed'
  });
});
item.post('/item/createmessage', _authenticateToken["default"], function (req, res) {
  if (req.user && req.user._id) {
    _message["default"].addadminmessage(req.body).then(function (success) {
      res.status(200).send({
        success: success
      });
    })["catch"](function (error) {
      res.status(405).send({
        error: error
      });
    });
    return;
  }
  res.status(405).send({
    error: 'not alowed'
  });
});

/*item.get('/items', authenticateToken, async (req, res) => {
    res.status(200).send({ success: { message: 'success', type: 'admin notifications get', content: [] } })
});*/

item.put('/item/update', _authenticateToken["default"], function (req, res) {
  if (req.user && req.user._id) {
    var _req$query = req.query,
      id = _req$query.id,
      type = _req$query.type;
    if (type === 'loan') {
      _itemeditor["default"].updateLoan(id, req.body).then(function (success) {
        res.status(200).send({
          success: success
        });
      })["catch"](function (error) {
        res.status(405).send({
          error: error
        });
      });
    }
    if (type === 'investmentplan') {
      _itemeditor["default"].updateInvestmentplan(id, req.body).then(function (success) {
        res.status(200).send({
          success: success
        });
      })["catch"](function (error) {
        res.status(405).send({
          error: error
        });
      });
    }
    if (type === 'savingsplan') {
      _itemeditor["default"].updateSavingsplan(id, req.body).then(function (success) {
        res.status(200).send({
          success: success
        });
      })["catch"](function (error) {
        res.status(405).send({
          error: error
        });
      });
    }
    if (type === 'notification') {
      _itemeditor["default"].updateNotification(id, req.body).then(function (success) {
        res.status(200).send({
          success: success
        });
      })["catch"](function (error) {
        res.status(405).send({
          error: error
        });
      });
    }
    return;
  }
  res.status(405).send({
    error: 'not alowed'
  });
});
item["delete"]('/item/delete', _authenticateToken["default"], function (req, res) {
  if (req.user && req.user._id) {
    var _req$query2 = req.query,
      type = _req$query2.type,
      id = _req$query2.id;
    if (type === 'loan') {
      _itemeditor["default"].deleteLoan(id).then(function (success) {
        res.status(200).send({
          success: success
        });
      })["catch"](function (error) {
        res.status(405).send({
          error: error
        });
      });
    }
    if (type === 'investmentplan') {
      _itemeditor["default"].deleteInvestmentPlan(id).then(function (success) {
        res.status(200).send({
          success: success
        });
      })["catch"](function (error) {
        res.status(405).send({
          error: error
        });
      });
    }
    if (type === 'savingsplan') {
      _itemeditor["default"].deleteSavingsPlan(id).then(function (success) {
        res.status(200).send({
          success: success
        });
      })["catch"](function (error) {
        res.status(405).send({
          error: error
        });
      });
    }
    if (type === 'notification') {
      _itemeditor["default"].deleteNotification(id).then(function (success) {
        res.status(200).send({
          success: success
        });
      })["catch"](function (error) {
        res.status(405).send({
          error: error
        });
      });
    }
    return;
  }
  res.status(405).send({
    error: 'not alowed'
  });
});
var _default = exports["default"] = item;