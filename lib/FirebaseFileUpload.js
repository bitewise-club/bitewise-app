/**
 * Exposes functionality for uploading images to Firebase Storage
 */

/**
 * Stores the given File object
 * @param storageRef The Firebase Storage reference
 * @param file The File object to store
 * @param nameOnDatabase The name on the database
 */
export function storeFile(storageRef, file, nameOnDatabase) {
    let ref = storageRef.child(nameOnDatabase);
    return ref.put(file);
}
