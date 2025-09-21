rm ./public/*.png
rm ./updateuat.zip
cd ~/Desktop/GitHub/portchecker
rm -Rf ./dist
ng build
cd dist/portchecker/browser
zip -r ./updateuat.zip ./*
scp -P 18765 -i ~/.ssh/id_ed25519 ./updateuat.zip u2528-gpezwd7o7ya7@ssh.freshupgrades.com:~/www/port-uat.freshupgrades.com/updateuat.zip
ssh u2528-gpezwd7o7ya7@ssh.freshupgrades.com -p 18765 -i ~/.ssh/id_ed25519 'rm -Rf ~/www/port-uat.freshupgrades.com/public_html'
ssh u2528-gpezwd7o7ya7@ssh.freshupgrades.com -p 18765 -i ~/.ssh/id_ed25519 'unzip -o ~/www/port-uat.freshupgrades.com/updateuat.zip -d ~/www/port-uat.freshupgrades.com/public_html'
ssh u2528-gpezwd7o7ya7@ssh.freshupgrades.com -p 18765 -i ~/.ssh/id_ed25519 'rm ~/www/port-uat.freshupgrades.com/updateuat.zip'
#rm ./updateuat.zip
