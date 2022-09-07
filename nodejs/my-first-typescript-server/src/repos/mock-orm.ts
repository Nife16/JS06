import jsonfile from 'jsonfile';


// **** Variables **** //

const dbFilePath = 'src/repos/database.json';
const resturauntDbFilePath = 'src/repos/resturauntDb.json';
const addressDbFilePath = 'src/repos/addressDb.json'


// **** Functions **** //


//USER
/**
 * Fetch the json from the file.
 */
function openDb(): Promise<Record<string, any>> {
  return jsonfile.readFile(dbFilePath);
}

/**
 * Update the file.
 */
function saveDb(db: Record<string, any>): Promise<void> {
  return jsonfile.writeFile(dbFilePath, db);
}

//RESTURAUNT
/**
 * Fetch the json from the file.
 */
function openResturauntDb(): Promise<Record<string, any>> {
  return jsonfile.readFile(resturauntDbFilePath);
}

/**
 * Update the file.
 */
function saveRestuantDb(db: Record<string, any>): Promise<void> {
  return jsonfile.writeFile(resturauntDbFilePath, db);
}


//ADDRESS
/**
 * Fetch the json from the file.
 */
function openAddressDb(): Promise<Record<string, any>> {
  return jsonfile.readFile(addressDbFilePath);
}

/**
 * Update the file.
 */
function saveAddressDb(db: Record<string, any>): Promise<void> {
  return jsonfile.writeFile(addressDbFilePath, db);
}


// **** Export default **** //

export default {
    openDb,
    saveDb,
    openResturauntDb,
    saveRestuantDb,
    openAddressDb,
    saveAddressDb
} as const;
