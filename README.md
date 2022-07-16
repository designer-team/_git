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

### コミットとは
「ファイルを変更したことを記録させますよ」という意味
| 用語 | 意味 |
| :--- | :--- |
| IT用語での「コミット」| 「確定させる」という意味 |
| ビジネス用語での「コミット」| 「成果を出す」という意味 |


<br><br>


## ハンズオンの紹介
自社のプロダクト「***」を紹介するサイトを制作  
[参考例：https://www.balmuda.com/jp/](https://www.balmuda.com/jp/)  
* シンプルな構成
* 擬似的な購入機能
* 擬似的な問い合わせフォーム機能
チームで機能開発とコンテンツの修正を行う<br>
<br><br>


## Gitを使った作業の流れ
### GithubのIssues(課題)にタスクを書き込む
![スクリーンショット 2022-07-16 10 41 26](https://user-images.githubusercontent.com/76714091/179330299-9f9d5dda-c2bd-481f-9133-1fb0639dd2ff.jpg)

### ローカル作業
1. ファイルを編集  
2. ファイルをステージングエリア[インデックス]に置く
```
$ git add .
```
3. この変更内容でローカルに記録
```
$ git commit -m "[変更内容]"
```
  
* addを取り消しは、 `$ git reset`
* commitログを確認したい場合は、 `$ git log`

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