const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const companyJobSchema = mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    jobIndustry: {
      type: String,
      required: true,
      trim: true,
    },
    jobFunction: {
      type: String,
      required: true,
      trim: true,
    },
    subJobFunction: {
      type: String,
      required: true,
      trim: true,
    },
    jobLocation: {
      type: String,
      required: true,
      trim: true,
    },
    jobDiscription: {
      type: String,
      required: true,
      trim: true,
    },
    jobRequirements: {
      type: String,
      required: true,
      trim: true,
    },
    profession: {
      type: String,
      required: true,
      trim: true,
    },
    educationLevel: {
      type: String,
      required: true,
      trim: true,
    },
    employementType: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: String,
      required: true,
      trim: true,
    },
    endDate: {
      type: String,
      required: true,
      trim: true,
    },
    madeOfWork: {
      type: String,
      required: true,
      trim: true,
    },
    noOfOpenings: {
      type: String,
      required: true,
      trim: true,
    },
    salaryInfo: {
      type: String,
      required: true,
      trim: true,
    },
    minSalary: {
      type: String,
      required: true,
      trim: true,
    },
    maxSalary: {
      type: String,
      required: true,
      trim: true,
    },
    salaryType: {
      type: String,
      required: true,
      trim: true,
    },
    postedDate: {
      type: String,
      required: true,
      trim: true,
    },
    additionalEmails: {
      type: String,
      required: true,
      unique: true,
      trim: true, 
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    role: {
      type: String,
      enum: ["freelancer","companyJob"],
      default: 'freelancer',
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
companyJobSchema.plugin(toJSON);
companyJobSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
// userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
//   const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
//   return !!user;
// };

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
// userSchema.methods.isPasswordMatch = async function (password) {
//   const user = this;
//   return bcrypt.compare(password, user.password);
// };

// userSchema.pre('save', async function (next) {
//   const user = this;
//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });

/**
 * @typedef User
 */
const companyJob = mongoose.model('companyJob', companyJobSchema);

module.exports = companyJob;
