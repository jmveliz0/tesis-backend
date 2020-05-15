const Knex = require("../db/knex");
const tableNames = require("../constants/tableNames");
const restaurantTableName = tableNames.restaurant;
/**
 * @param {Knex} knex
 */

function create() {}
async function getAll({ name }) {
  if (name) {
    return await Knex(restaurantTableName)
      .select()
      .where(`${restaurantTableName}.name`, "ilike", `%${name}%`);
  }
  return await Knex(restaurantTableName).select();
}
function updateById() {}
function deleteById() {}

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
};
