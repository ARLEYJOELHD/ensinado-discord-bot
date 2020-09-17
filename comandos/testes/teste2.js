let client;
let guild;
let user;
let clientUser;
let channel;
let guildMember;
let message;

- client.users.get('123456789012345678');
+ client.users.cache.get('123456789012345678');

+ message.guild.members.cache.get()

- guild.members.get('123456789012345678');
+ guild.members.cache.get('123456789012345678');

- guild.ban('123456789012345678');
+ guild.members.ban('123456789012345678');

- guild.unban('123456789012345678');
+ guild.members.unban('123456789012345678', 'Ban appealed.');

- user.avatarURL;
+ user.avatarURL();

- user.displayAvatarURL;
+ user.displayAvatarURL();

- clientUser.avatarURL;
+ clientUser.avatarURL();
+ clientUser.avatarURL({ dynamic: true, format: 'png', size: 1024 });

- clientUser.displayAvatarURL;
+ clientUser.displayAvatarURL();
+ clientUser.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });

- channel.createInvite({ temporary: true }, 'Just testing');
+ channel.createInvite({ temporary: false, reason: 'Just testing' });

- guildMember.addRole('123456789012345678');
- guildMember.addRoles(['123456789012345678', '098765432109876543']);
+ guildMember.roles.add('123456789012345678');
+ guildMember.roles.add(['123456789012345678', '098765432109876543']);

- guildMember.removeRole('123456789012345678');
- guildMember.removeRoles(['123456789012345678', '098765432109876543']);
+ guildMember.roles.remove('123456789012345678');
+ guildMember.roles.remove(['123456789012345678', '098765432109876543']);

- guildMember.setRoles(['123456789012345678', '098765432109876543']);
+ guildMember.roles.set(['123456789012345678', '098765432109876543']);

- message.delete({timeout: 5000});
+ message.delete({ timeout: 5000, reason: 'It had to be done.' });