// set minimal stacktrace to reduce obsessive logs
if (require('is-travis')) Error.stackTraceLimit = 0

require('./destroy-bound-buffer')
require('./flatten')
require('./context-loss')
require('./constructor')
require('./projection')
require('./projection-lines')
require('./frame')
require('./frame-destroy')
require('./resize')
require('./accessor')
require('./half-float')
require('./read')
require('./clear')
require('./buffer')
require('./element-parse')
require('./context')
require('./triangle')
require('./elements')
require('./subdata')
require('./line')
require('./batch')
require('./draw')
require('./batch-attributes')
require('./dynamic-elements')
require('./this')
require('./scope')
require('./scope-batch')
require('./attributes')
require('./texture-simple')
require('./uniforms')
require('./element-more')
// TODO: IE
require('./depth')
// TODO: IE
require('./blend')
// TODO: IE
require('./stencil')
// TODO: IE
require('./polygon-offset')
// TODO: IE
require('./culling')
// TODO: IE
require('./misc')
// TODO: IE
require('./sample')
// TODO: IE
require('./scissor')
// TODO: IE
require('./viewport')
// TODO: IE
require('./texture2d')
// TODO: IE
require('./textureCube')
require('./renderbuffer')
// TODO: IE
require('./framebuffer-parse')
// TODO: IE
require('./framebuffer-simple')
require('./framebuffer-ref-count')
// TODO: IE
require('./framebuffer-resize')
// TODO: IE
require('./framebuffer-depth-stencil')
require('./framebuffer-codegen')
require('./framebuffer-mrt')
require('./stats')
require('./stats-commands')
require('./stats-gputime')
require('./instance')
// TODO: IE
require('./cube-fbo-resize')
require('./dynamic-cube-fbo')
require('./dynamic-scissor')
require('./dynamic-viewport')
require('./missing-shader')
require('./attribute-constants')
require('./attributes-nested')
require('./buffer-update')
require('./elements-update')
require('./elements-length')
