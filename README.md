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
main(master)は本番にいつでもデプロイできる状態を必ず保っておくことが鉄則ルール  
開発用にマスターコピーとしてdevelopブランチを作って進めることもあるが、反映までの工程が増えるため、あまり使わない方針
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
* 間違って登録した場合は`$ git remote rm origin`で削除<br>
<br><br><br><br>




## Gitを使った作業の流れ
### GithubのIssues(課題)に要望を書き込む
![スクリーンショット 2022-07-16 10 41 26](https://user-images.githubusercontent.com/76714091/179330299-9f9d5dda-c2bd-481f-9133-1fb0639dd2ff.jpg)

### ローカル作業
#### 1. issueに対応した作業用ブランチをmain(master)ブランチから作成(切る)
```
$ git branch feature/#1_add_cartButtonLink
```
命名は`ブランチ名/#issue番号_何するか_機能`といったルールで行う    
上記の場合は機能追加なので、`feature(トピック・特集といった意味)`を使用<br>

#### 2. ブランチを切り替える
```
$ git checkout feature/#1_add_cartButtonLink
```
どのブランチにいるかの確認は`$ git branch`<br>

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
に編集を行ったものだと仮定<br>

#### 4. 変更したファイルの一覧と変更前の差分を確認する
```
$ git status
```
一覧と状態を確認するコマンド [modified: が変更したファイル]
```
$ git diff
```
比較するコマンド [長い時はエディタが開くので`:wq`で閉じる]<br>

#### 5. ファイルをステージングエリア(インデックス)に置く
```
$ git add .
```
一旦、ファイルを机の上に「まとめて置いておく」といったイメージのコマンド  
コミット(確定)する前に確認することができたり、複数ファイルをまとめておくことで変更履歴がわかりやすくできるのがメリット  
* .は確認した差分を全て登録できるオプション  
* 間違えた場合は`$ git reset HEAD`で一つ前のaddを取り消しできる  
* 全部リセットする場合は`$ git reset`<br>

#### 6. この変更内容でローカルに記録
```
$ git commit -m "[変更内容]"
```
机の上にまとめて置いておいたファイルを「変更履歴というバインダーにしまう」といったイメージのコマンド
* コミットログを確認したい場合は、 `$ git log`
* `ファイルを編集 -----> $ git add -----> $ git commit`を繰り返しながら進めるのがGitの流儀<br>

#### 7. リモートリポジトリに変更後のソースを送る
```
$ git push origin HEAD
```
現在いるブランチ(HEAD)の分をリモートリポジトリ(originのURL)に「押し上げる」<br>
<br><br>


### ローカル作業-2(次のタスクもこなして、ローカルでのマージを覚えてしまおう)
#### 1. 次のタスク(issue#2)に関するブランチを作成
```
$ git checkout -b feature/#2_add_noindex
```
checkoutに-bオプションを付ければ、作成と切り替えが同時にできる<br>

#### 2. ファイルを編集
```
html:index.html

<meta name="viewport" content="width=device-width, initial-scale=1.0">
↓
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex">
```
タスクをこなす<br>

#### 3. 変更履歴に登録
```
$ git commit -am "[変更内容]"
```
今回は単一ファイルのシンプルな変更なので、addとcommitを同時に実行<br>

#### 4. issue#1のブランチをマージ
```
$ git merge feature/#1_add_cartButtonLink
```
次のコマンドで取り込める`$ git merge [取り込みたいブランチ名]`<br>

#### 5. コンフリクト(競合)した箇所を正しく編集
```
<<<<<<< HEAD
    <a href="#">購入する</a>
=======
    <a href="#">販売先へ進む</a>
>>>>>>> feature/#2_add_noindex
```
といった具合にバッティングした内容が囲まれているので直す<br>
<br><br>


### リモート(チーム)作業
タスクを終えたので上流ブランチに変更をマージ(融合)させたいと思います
#### 1. リモートとの差分を確認
```
$ git diff feature/#2_add_noindex origin/main
```
リモート上の最新情報をローカルに持ってくる(origin/developに取り込まれる)
```
$ git diff feature/#2_add_noindex origin/main
```
ローカルとリモートとの差分を確認<br>

#### 2. git push origin feature/#2_add_noindex
リモートリポジトリへ反映<br>

#### 3. プルリクエストを送る
![スクリーンショット 2022-07-17 9 16 37](https://user-images.githubusercontent.com/76714091/179379557-cd95491a-8667-442d-892f-949417bd1009.jpg)
プルリクとはレビュアーに上流ブランチへのマージをお願いすること  
プルリクエストとは「マージ先のブランチに引っ張ってください」といった意味<br>

![スクリーンショット 2022-07-17 9 21 07](https://user-images.githubusercontent.com/76714091/179379561-5aca4a6a-280f-4659-a5c3-2136ed63a5d3.jpg)
<br>
![スクリーンショット 2022-07-17 9 30 25](https://user-images.githubusercontent.com/76714091/179379562-b46760e7-1271-436f-b521-a7190c09c25f.jpg)
<br>
![スクリーンショット 2022-07-17 9 32 52](https://user-images.githubusercontent.com/76714091/179379564-a2d25fbf-027e-4286-af3c-aa000cd89482.jpg)
<br>
![スクリーンショット 2022-07-17 9 35 09](https://user-images.githubusercontent.com/76714091/179379565-535a7721-c77a-419d-8cf6-8b6b0bc5e956.jpg)
<br>
![スクリーンショット 2022-07-17 9 43 10](https://user-images.githubusercontent.com/76714091/179379566-0e7b9778-58b1-4cc8-ba38-6272a7db7e32.jpg)
<br>
![スクリーンショット 2022-07-17 9 44 35](https://user-images.githubusercontent.com/76714091/179379567-a3c191a5-472f-4159-8abf-55ccfcf22ad5.jpg)
<br>
![スクリーンショット 2022-07-17 9 47 42](https://user-images.githubusercontent.com/76714091/179379568-8bfbc761-ad83-474c-9e3b-e0b27ce6c677.jpg)
<br>
![スクリーンショット 2022-07-17 9 49 02](https://user-images.githubusercontent.com/76714091/179379569-6f35d3ff-5140-4a58-a41a-cd838a287ebc.jpg)
<br>
![スクリーンショット 2022-07-17 9 50 33](https://user-images.githubusercontent.com/76714091/179379571-ccc97f90-bc6a-4970-af74-710f034ddb45.jpg)
