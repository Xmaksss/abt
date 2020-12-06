const mongoose = require("mongoose");

const {Schema} = mongoose;

const RecordSchema = new Schema(
    {
        siteId: {
            type: String
        },
        name: {
            type: String
        },
        type: {
            type: String
        },
        value: {
            type: String
        },
        context: {
            type: Object
        }
    }, {
        timestamps: true
    }
);

const Record = mongoose.model("record", RecordSchema);

module.exports = {Record};
