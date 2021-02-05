set -e
echo 2
cd /Users/despiegk/codesync/github/threefoldfoundation/www_threefold_marketplace
echo 3
rm -f yarn.lock
rm -rf .cache        
echo 4
set +ex
. /Users/despiegk/.publisher/nvm.sh
echo 5
set -ex
if [ "false" = "true" ]; then
    rsync -ra --delete node_modules/ /Users/despiegk/.publisher/node_modules/
else
    rsync -ra --delete /Users/despiegk/.publisher/node_modules/ node_modules/ 
fi

set +x
nvm use --lts
npm install

