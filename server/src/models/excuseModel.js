import mongoose, { Schema } from "mongoose";

const excusePartSchema = new Schema({
    type: {
        type: String, enum:
            ["introduccion",
                "sujeto",
                "verbo",
                "objeto",
                "justificacion"],
        required: true
    },
    text: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    }
});

const excuseModel = mongoose.model("excusePart", excusePartSchema);

export default excuseModel;