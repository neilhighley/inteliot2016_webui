var restify = require('restify');
 
var server = restify.createServer({
  name: 'inteliot2016-matt',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
 
server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});

server.get('/upd/:pack', function (req, res, next) {
    var ret={
        confirm:'ok',
        sent:req.params,
        data:[1,2,3,4]
    };
  res.send(ret);
  return next();
});
server.get('/info/:ref/:pack', function (req, res, next) {
    var ret={
        confirm:'ok',
        sent:req.params.pack,
        data:[1,2,3,4]
    };
    
    if(req.params.ref=='heat'){
        ret.data=[5,6,7,8];
    }
    if(req.params.ref=='height'){
        ret.data=[9,10,11,12];
    }
    
  res.send(ret);
  return next();
});
 
server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});