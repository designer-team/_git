# Gitを使ったチーム制作を習得するためのリポジトリ
一般的なフローに従ってハンズオンして覚える



## セットアップ
### インストール
[Gitをダウンロード](https://git-scm.com/)
インストール時の選択は全てnextでOK

### ユーザー設定
```
$ git config --global user.name "名前"
$ git config --global user.email "メールアドレス"
```


## 基本知識
### リポジトリとは
変更を記録しておくための場所
|用語|意味|
|:----|:----|
|ローカルリポジトリ|自分のマシン内での作業場、個人のデスク|
|リモートリポジトリ|ネット上にある共通の作業場、みんなで使うデスク|

### コミットとは
「ファイルを変更したことを記録させますよ」という意味
|用語|意味|
|:----|:----|
|IT用語での「コミット」|「確定させる」という意味|
|ビジネス用語での「コミット」|「成果を出す」という意味|


## 作業の流れ
### ローカルでの流れ
1. ファイルを編集  
2. ファイルをステージングエリア(インデックス)に置いておく `$ git add .`
3. この変更内容でローカルに記録 `$ git commit -m "[変更内容]"`

* addを取り消す場合は、 `$ git reset`
* commitしたログを確認したい場合は、 `$ git log`



## チーム開発でのフロー
### ブランチの使い方
githubフローの場合
|ブランチ名|役割|
|:----|:----|
|main(master)|リリース済みの本番のソースコードを管理|
|hotfix|本番にエラーが出た時の緊急修正用|
|release|本番リリース前の準備用|
|develop|開発中のソースコードを管理(ここが主な作業場)|
|feature|各機能に注目して開発する際の作業場|