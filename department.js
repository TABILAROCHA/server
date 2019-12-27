import { Schema as _Schema, model } from 'mongoose';
var Schema = _Schema;

var departmentSchema = new Schema ({
    name: String,
    }, {versionKey: false});

    export default model("Department", departmentSchema);