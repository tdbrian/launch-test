import { setUserPassword } from '../passwords/password.functions';
import { insertUser, getAdminUserCount } from './users.datastore';
import { generateGuid } from '../../utils/guid.functions';
import User from './user';

export async function setupDefaultAdmin() {
    let user = new User('Admin', 'Admin', 'admin@youremail.com', 'admin', true, generateGuid());
    const count = await getAdminUserCount(user);
    if (count === 0) await addNewUser(user);
}

export async function addNewUser(user: User): Promise<User> {
    const usePassword = user.password;
    if (!user.isValid(true) || usePassword === null) return Promise.reject('Invalid user');
    const userId = await insertUser(user);
    user.clensePassword();
    await setUserPassword(usePassword, userId);
    return user;
}
