document.addEventListener('DOMContentLoaded', function () {
    const saveButton = document.getElementById('save-button'); // 保存ボタンのID
    const form = document.querySelector('form.needs-validation'); // フォームのクラス

    // 保存ボタンのクリックイベントを処理
    saveButton.addEventListener('click', function (event) {
        event.preventDefault(); // フォームのデフォルト送信を防ぐ

        // フォーム内の各入力値を取得
        const emailText = document.getElementById('email').textContent; // Eメール
        const companyNameText = document.getElementById('companyName').textContent; // 会社名
        // form内のinputやselectから値を取得するためのコード
        const companyInfo = form.querySelector('[name="company_info"]').value; // 会社概要
        const category = form.querySelector('[name="category"]').value; // 会社カテゴリー
        const prefecture = form.querySelector('[name="prefecture"]').value; // 所在地

        // 確認用メッセージを作成
        const confirmMessage = `
            以下の内容で保存してよろしいですか？
            Eメール: ${emailText}
            会社名: ${companyNameText}
            会社概要: ${companyInfo}
            会社カテゴリー: ${category}
            所在地: ${prefecture}
        `;

        // 確認ダイアログを表示し、OKが選択された場合のみフォームを送信
        if (confirm(confirmMessage)) {
            // フォームを送信
            form.submit();
        }
    });

});
