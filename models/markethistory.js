var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var MarketsSchema = new Schema({
  symbol: { type: String },
  time: { type: Date, unique: true, index: true},
  cap: { type: Schema.Types.Mixed },
  price: { type: Schema.Types.Mixed },
  volume:  { type: Number },
  supply: { type: Number },
  position: { type: Number }
});

module.exports = mongoose.model('MarketHistory', MarketsSchema);
