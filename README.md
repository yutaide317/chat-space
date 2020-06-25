## usersテーブル

|Colum|Type|Options|
|-----|----|-------|
|name|string|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :messages

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
|name|string|null: false|

### Association
- has_many :users, through: :groups_users
- has_many :groups_users
- has_many :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
