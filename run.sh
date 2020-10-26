if [ ! -z "$1" ] && [ $1 == "--install-dependencies" ]
then
        npm install
fi

gridsome develop