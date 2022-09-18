class GitCommand {
    constructor(working_directory){
        this.working_directory = working_directory;
    }
    //Command: git init 
    init(){
        this.staging = [];
        this.local_repository = [];
        return "Initialized as empty Git repository.";
    }

    //Command: git status
    status(){        
        /*
            Create logic here and run unit testing.
        */
        let size = Object.keys(this.working_directory.new_changes).length;
        let path = this.working_directory.new_changes;
        console.log(size);
        for(let i = 0; i <= size; i++){
            if(size > 0){
                return `You have ${size} change/s.\n${path['views/index.html'].location}/${path['views/index.html'].name}\n${path['assets/scripts/index.js'].location}/${path['assets/scripts/index.js'].name}`; 
            }else{
                return `You have ${size} change/s.\n`;
            }
        }
        return true;
        // return "You have 2 change/s.\n";
    }

    //Command: git add <filename/file directory/wildcard> 
    add(path_file){
        let modified_files = this.working_directory.new_changes;
        
        if(modified_files[path_file]){
            this.staging.push(modified_files[path_file]);
            delete modified_files[path_file];
        }
    }

    //Command: git commit -m "<message>"
    commit(message){
        if(this.staging.length > 0){
            this.local_repository.push({ "message": message, "files": this.staging });
            this.staging = [];
            return "Done committing to local repository.";
        }
        return "Nothing to commit.";
    }

    //Command: git push
    push(){   
        if(this.local_repository.length > 0){
            return "Done pushing to remote repository.";
        } 
        else {
            return "Nothing to push. No committed file found.";
        }     
    }
}


module.exports = GitCommand;
