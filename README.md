# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Colum|Type|Options|
|-----|----|-------|
|user_id|integer|null: false, foreign_key: true|
|name|text|null: false, foreign_key: true|

### Association
- belong_to :groups
- belong_to :messages

## messagesテーブル

|Colum|Type|Options|
|-----|----|-------|
|user_id|integer|null: false, foreign_key: true|
|body|text|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|

### Association
- belong_to :groups
- belong_to :user

## groupsテーブル

|Colum|Type|Options|
|-----|----|-------|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|
|group_name|text|null: false, foreign_key: true|

### Association
- belong_to :group
- belong_to :user

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user




