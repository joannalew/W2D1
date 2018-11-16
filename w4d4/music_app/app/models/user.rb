class User < ApplicationRecord
	validates :email, :session_token, presence: true, uniqueness: true
	validates :password_digest, presence: true
	validates :password, length: {minimum: 6, allow_nil: true}

	after_initialize :ensure_session_token

	attr_reader :password

	def self.generate_session_token
		SecureRandom.urlsafe_base64(16)
	end

	def self.find_by_credentials(uname, pword)
		user = User.find_by(email: uname)
		return nil if user.nil?
		user.is_password?(pword) ? user : nil
	end

	def reset_session_token!
		self.session_token = self.class.generate_session_token
		self.save!						# don't forget to save!
		self.session_token 				
	end

	def ensure_session_token
		self.session_token ||= self.class.generate_session_token
	end

	def password=(pword)
		@password = pword
		self.password_digest = BCrypt::Password.create(pword)
		# self.save!
	end

	def is_password?(pword)
		BCrypt::Password.new(password_digest).is_password?(pword)
	end
end


# why do we call save! for resetting session token, but not for password=?

