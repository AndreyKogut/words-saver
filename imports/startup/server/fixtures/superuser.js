import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

const createSuperUser = () => {
  const { admin_name, admin_password } = Meteor.settings;

  const users = Meteor.users.find().count();

  if (!users) {
    Accounts.createUser({
      username: admin_name,
      password: admin_password,
    });
  }
};

createSuperUser();
