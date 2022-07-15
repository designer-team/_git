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
----|----
|ローカルリポジトリ|自分のマシン内での作業場、個人のデスク|
|リモートリポジトリ|ネット上にある共通の作業場、みんなで使うデスク|
### コミットとは
「ファイルを変更したことを記録させますよ」という意味
|用語|意味|
----|----
|IT用語での「コミット」|「確定させる」という意味|
|ビジネス用語での「コミット」|「成果を出す」という意味|


## リスト
* Python 3.x
* NumPy
* Matplotlib

## コード
```bash
$ ojichat -h
Usage:
  ojichat [options] [<name>]

Options:
  -h, --help      ヘルプを表示
  -V, --version   バージョンを表示
  -e <number>     絵文字/顔文字の最大連続数
  -p <level>      句読点挿入頻度レベル
```

## 一部コード
`-p` オプションの数字を大きくする


## インデックス
[1]【SNSあるある】「おじさん」がLINEやメールで送ってきそうな文が話題に！【ソーシャルハラスメント？】 | こぐま速報
https://kogusoku.com/archives/2939

[2] 女子高生「おじさんLINEごっこ」の実例に学ぶキモがられる態度とは | ニュース3面鏡 | ダイヤモンド・オンライン
https://diamond.jp/articles/-/143111?page=2

[3] 女子同士がオジサンになりきってオジサンとオジサンがキャッキャする謎の「オジサンLINEごっこ」が流行の兆し - Togetter
https://togetter.com/li/1111905


## チーム開発でのフロー
### ブランチ
githubフローの場合
|ブランチ名|役割|
----|----
|main(master)|リリース済みの本番のソースコードを管理|
|hotfix|本番にエラーが出た時の緊急修正用|
|release|本番リリース前の準備用|
|develop|開発中のソースコードを管理(ここが主な作業場)|
|feature|各機能に注目して開発する際の作業場|