import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
    return `${this.fname} ${this.lname}`;
  }
}

// TODO: Human.init()
Human.init(
  {
    humanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fname: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    lname: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, 
  {
    modelName: "Human",
    sequelize: db
  }
)

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

// TODO: Animal.init()
Animal.init(
  {
    animalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    humanId: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    species: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    birthYear: {
      type: DataTypes.INTEGER
    }
  },
  {
    modelName: "Animal",
    sequelize: db
  }
)

// TODO: Define Relationship
Human.hasMany(Animal, { foreignKey: "humanId" });
Animal.belongsTo(Human, { foreignKey: "humanId" });

export default db;
