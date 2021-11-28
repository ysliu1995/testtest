import { Document, Model, model, Schema } from "mongoose";

/**
 * Interface to model the User Schema for TypeScript.
 * @param transaction:string
 * @param description:string
 */
export interface ITx extends Document {
  transaction: string;
  description: string;
}

const txSchema: Schema = new Schema({
    transaction: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
});

const Tx: Model<ITx> = model("Tx", txSchema);

export default Tx;