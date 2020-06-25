## usersテーブル

|Colum|Type|Options|
|-----|----|-------|
|name|text|null: false|

### Association
- belong_to :groups
- has_many :messages, through: :groups_users
- has_many :groups_users

## messagesテーブル

|Colum|Type|Options|
|-----|----|-------|
|user_id|integer|null: false, foreign_key: true|
|body|text|
|image|string|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Colum|Type|Options|
|-----|----|-------|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|
|name|text|null: false, foreign_key: true|

### Association
- has_many :user, through: :groups_users
- has_many :groups_users
- belong_to :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user