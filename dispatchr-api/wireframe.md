# User

has_many :dispatches, foreign_key: :dispatcher_id

has_many :user_dispatches
has_many :assignments, through: :user_dispatches, foreign_key: :assignee_id

# Dispatch

belongs_to :dispatcher, class_name: "User", foreign_key: :dispatcher_id

has_many :user_dispatches
has_many :assignees, through: :user_dispatches


# UserDispatch

belongs_to :dispatch
belongs_to :assignee, class_name: "User", foreign_key: :assignee_id

# Trail
