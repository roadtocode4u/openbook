import mongoose from "mongoose";

const studyMaterialSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'title cannot be empty'] },
    description: { type: String, required: [true, 'description cannot be empty'] },
    url: { type: String, required: [true, 'url cannot be empty'] },
    contenttype: { type: String, required: [true, 'contenttype cannot be empty'] }
},
    {
        timestamps: true
    }
)

const StudyMaterial = mongoose.model('StudyMaterial', studyMaterialSchema);
export default StudyMaterial;