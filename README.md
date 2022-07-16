# Gitを使ったチーム制作を習得するためのリポジトリ
一般的なフローに従ってハンズオンして覚える
<br><br><br><br>




## セットアップ
### インストール
[Gitをダウンロード](https://git-scm.com/)
インストール時の選択は全てnextでOK

### ユーザー設定
```
$ git config --global user.name "名前"
$ git config --global user.email "メールアドレス"
```
<br><br>


## 基本知識
専門用語が多いので訳して理解しておくと概念が理解しやすい
### リポジトリとは
変更を記録しておくための場所
| 用語 | 意味 |
| :--- | :--- |
| ローカルリポジトリ | 自分のマシン内での作業場、個人のデスク |
| リモートリポジトリ | ネット上にある共通の作業場、みんなで使うデスク |
### ブランチとは
作業用に作る(切ると表現する)ラインのようなイメージ  
main(master)は本番と同じ状態のソースを残すため、開発用にdevelopブランチを作って作業する
| 用語 | 意味 |
| :--- | :--- |
| ブランチ | 「枝」という意味 |
### コミットとは
「ファイルを変更したことを記録させますよ」という意味
| 用語 | 意味 |
| :--- | :--- |
| IT用語での「コミット」 | 「確定させる」という意味 |
| ビジネス用語での「コミット」 | 「成果を出す」という意味 |


<br><br>


## ハンズオンの紹介
自社のプロダクトを紹介するサイトを制作  
* シンプルな構成
* 擬似的な購入機能
* 擬似的な問い合わせフォーム機能


チームで機能開発とコンテンツの修正を行う
<br><br><br><br>




## まずはリポジトリとブランチの準備
### リモートリポジトリからローカルへダウンロード
```
$ git clone https://github.com/[アカウント名]/[リポジトリ名].git
```
自動的にリモートリポジトリも origin に登録される

### リモートレポジトリを登録
```
$ git remote -v
```
でリモートリポジトリが登録されてるかを確認  
```
$ git remote add origin [リポジトリのURL]
```
登録されていなかったら上記で登録する
* 間違って登録した場合は`$ git remote rm origin`で削除

### developブランチを準備
```
$ git branch develop
$ git checkout develop
$ git push origin develop
```
もしくはGithub上でdevelopブランチを作成<br>
<br><br><br><br>




## Gitを使った作業の流れ
### GithubのIssues(課題)に要望を書き込む
![スクリーンショット 2022-07-16 10 41 26](https://user-images.githubusercontent.com/76714091/179330299-9f9d5dda-c2bd-481f-9133-1fb0639dd2ff.jpg)

### ローカル作業
#### 1. issueに対応した作業用ブランチをdevelopブランチから作成(切る)
```
$ git branch feature/#1_add_cartButtonLink
```
命名は`ブランチ名/#issue番号_何するか_機能`といったルールで行う    
上記の場合は機能追加なので、`feature(トピック・特集といった意味)`を使用

#### 2. ブランチを切り替える
```
$ git checkout feature/#1_add_cartButtonLink
```
どのブランチにいるかの確認は`$ git branch`

#### 3. ファイルを編集(タスクをこなす)
```
html:index.html

<a href="#">購入する</a>
↓
<a href="#">販売先へ進む</a>
```
```
javascript:common.js

//購入機能
document.querySelector('[href="#"]').onclick = function (e) {
  e.preventDefault();
  alert("決済画面です");
};
↓
//購入機能
document.querySelector('[href="#"]').onclick = function (e) {
  e.preventDefault();
  alert("カート画面に進みます");
  location.href = 'https://www.google.com/search?q=shopping';
};
```
に編集を行ったものだと仮定

#### 4. 変更したファイルの一覧と変更前の差分を確認する
```
$ git status
```
一覧と状態を確認するコマンド [modified: が変更したファイル]
```
$ git diff
```
比較するコマンド [長い時はエディタが開くので`:wq`で閉じる]

#### 5. ファイルをステージングエリア(インデックス)に置く
```
$ git add .
```
一旦、ファイルを机の上に「まとめて置いておく」といったイメージのコマンド  
コミット(確定)する前に確認することができたり、複数ファイルをまとめておくことで変更履歴がわかりやすくできるのがメリット  
* .は確認した差分を全て登録できるオプション  
* 間違えた場合は`$ git reset HEAD`で一つ前のaddを取り消しできる  
* 全部リセットする場合は`$ git reset`

#### 6. この変更内容でローカルに記録
```
$ git commit -m "[変更内容]"
```
机の上にまとめて置いておいたファイルを「変更履歴というバインダーにしまう」といったイメージのコマンド
* コミットログを確認したい場合は、 `$ git log`
* `ファイルを編集 -----> $ git add -----> $ git commit`を繰り返しながら進めるのがGitの流儀

#### 7. リモートリポジトリに変更後のソースを送る
```
$ git push origin HEAD
```
現在いるブランチ(HEAD)の分をリモートリポジトリ(originのURL)に「押し上げる」
<br><br>


### ローカル作業-2(複数ブランチを使う場合)
#### 次のタスクに関するブランチを作成
```
$ git checkout -b feature/#2_add_noindex
```
checkoutに-bオプションを付ければ、作成と切り替えが同時にできる


### リモート(チーム)作業

<br><br>


## チーム開発でのブランチの使い方
githubフローの場合
| ブランチ名 | 役割 |
| :--- | :--- |
| main(master) | リリース済みの本番のソースコードを管理 |
| hotfix | 本番にエラーが出た時の緊急修正用 |
| release | 本番リリース前の準備用 |
| develop | 開発中のソースコードを管理(ここが主な作業場) |
| feature | 各機能に注目して開発する際の作業場 |
